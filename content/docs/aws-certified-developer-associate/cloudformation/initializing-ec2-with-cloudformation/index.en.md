---
title: Initializing Amazon EC2 Instances with AWS CloudFormation Init
description: Initializing Amazon EC2 Instances with AWS CloudFormation Init
toc: true
date: 2022-07-06
---

## Lab

- [Initializing Amazon EC2 Instances with AWS CloudFormation Init](https://cloudacademy.com/lab/initializing-amazon-ec2-instances-with-aws-cloudformation-init)


## Establishing Desired EC2 Instance State with AWS CloudFormation Init

1. In the AWS Console search bar, search for _cloudformation_ and click the **CloudFormation** result under **Services**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220316112637-1-3361018d-b31b-42d8-bce9-8ecbb7e40629.png)

2\. Click the **Create stack** dropdown menu and select **With new resources**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220421110013-2-a3da6ef1-70cb-42ed-8741-0cfac17de1dd.png)

3\. In the **Create stack** form, in the **Specify template** section, ensure **Amazon S3 URL **is selected for the **Template source**.

4. Paste in the following URL in the **Amazon S3 URL** field:

```yaml
AWSTemplateFormatVersion: '2010-09-09'
Description: Provision a Single Amazon EC2 Instance with CFN Helper Scripts

Parameters:
  AmiID:
    Description: The ID of the AMI.
    Type: AWS::SSM::Parameter::Value<AWS::EC2::Image::Id>
    Default: /aws/service/ami-amazon-linux-latest/amzn2-ami-hvm-x86_64-gp2

Resources:
  WebServer:
    Type: AWS::EC2::Instance
    Properties:
      ImageId: !Ref AmiID
      InstanceType: t3.micro
      SecurityGroupIds:
        - !Ref WebServerSecurityGroup
      UserData:
        # Update aws-cfn-bootstrap
        # Run cfn-init to initialize WebServer content
        # Return cfn-init run result to CloudFormation upon completion
        Fn::Base64:
          !Sub |
            #!/bin/bash -xe
            yum update -y aws-cfn-bootstrap
            /opt/aws/bin/cfn-init -v --stack ${AWS::StackName} --resource WebServer --region ${AWS::Region}
            /opt/aws/bin/cfn-signal -e $? --stack ${AWS::StackName} --resource WebServer --region ${AWS::Region}
    CreationPolicy:
      ResourceSignal:
        Count: 1
        Timeout: PT5M
    Metadata:
      AWS::CloudFormation::Init:
        config:
          packages:
            yum:
              httpd: []
          files:
            "/var/www/html/index.html":
              content: |
                  <center>
                    <h1>Cloud Academy EC2 Instance</h1>
                    <h3>This content has been initialized with <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-helper-scripts-reference.html" target="_blank">AWS CloudFormation Helper Scripts</a></h3>
                  </center>
              mode: '000644'
          services:
            sysvinit:
              httpd:
                enabled: 'true'
                ensureRunning: 'true'

  WebServerSecurityGroup:
    Type: AWS::EC2::SecurityGroup
    Properties:
      GroupDescription: SSH and HTTP
      SecurityGroupIngress:
      - CidrIp: 0.0.0.0/0
        FromPort: 22
        IpProtocol: tcp
        ToPort: 22
      - CidrIp: 0.0.0.0/0
        FromPort: 80
        IpProtocol: tcp
        ToPort: 80

Outputs:
  WebServerPublicDNS:
    Description: Public DNS of EC2 instance
    Value: !GetAtt WebServer.PublicDnsName
```

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220421110301-3-f9a751e0-a1ee-4e66-9118-1ee65ed8f828.png)

The CloudFormation stack template is stored in a public S3 bucket. The EC2 instance resource definition is shown below:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220421110828-4-4ae29bc7-89fb-4877-8f8f-22acd70bacb8.png)

The `WebServer` EC2 instance is defined above. It is a size `t3.micro` instance that references a `WebServerSecurityGroup` resource for its security group and the `AmiID` parameter for its image ID. Both of these referenced configurations are defined elsewhere in the template. 

The `UserData` script defined next performs the following tasks once the EC2 instance is created:

* Updates the `aws-cfn-bootstrap `package to retrieve the latest version of the helper scripts
* Runs the `cfn-init` helper script to execute the `WebServer` instance `Metadata` scripts
* Runs the `cfn-signal`helper script to notify CloudFormation after all the service(s) (Apache in this case) is installed and configured on the EC2 instance

_Note_: The `cfn-init` helper script is not executed automatically. You must run the `cfn-init` script within the EC2 instance `UserData` in order to execute your metadata scripts.

The `cfn-signal` helper script works hand-in-hand with the `CreationPolicy` configuration. The `ResourceSignal` property has a `Count` of `1` and a `Timeout` of `PT5M`. This instructs CloudFormation to wait for up to 5 minutes to receive 1 resource signal from the EC2 instance.

The `cfn-signal` helper script call in the `UserData` uses `$?` to retrieve the return code of the previous script. If the `cfn-init` script is successful and the EC2 instance is configured properly, `cfn-signal` returns a success to CloudFormation which then transitions the EC2 instance to the CREATE_COMPLETEstatus. If the `cfn-init` script is unsuccessful or the timeout of 5 minutes expires before receiving a signal, then the EC2 instance will be transitioned to a CREATE_FAILEDstatus and the stack deployment will fail. 

The EC2 instance `Metadata` configuration is the same as the previous lab step. It defines a `AWS::CloudFormation::Init` script to install the `httpd` package using `yum`, generate an `index.html` file within `/var/www/html/` and start the `httpd` service to serve the content from the EC2 instance.

5\. Click **Next **to continue:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220421114023-5-f4e13221-bc4d-4fa1-9cb7-c78cec87a773.png)

6\. Enter _web-server-stack_ for the **Stack name** and click **Next**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220421114124-6-e6db9f5b-3960-443c-aeb4-798e9f9927af.png)

7\. You will not be configuring additional stack options. Scroll to the bottom of the page and click **Next**.

8\. On the review page, scroll to the bottom and click **Create stack **to deploy your stack:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220421114250-7-c2f94ff5-1f5f-488e-a271-583d80b7046c.png)

Your stack will begin deploying and you will be brought to the **Events** page of your **web-server-stack**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220421114426-10-d453317b-c279-4a04-a944-9206b9dd0cb9.png)

The stack can take up to 3 minutes to deploy successfully. 

9\. If the **Events** section does not automatically refresh after 3 minutes, click the refresh icon:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220421114322-9-8e35281f-1d3a-4fdf-b6b1-66d7a4cb4b02.png)

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220421114736-11-b91e928b-cf9d-499e-ab39-cf8c90ccd343.png)

The **WebServer** instance remains in a **CREATE\_IN\_PROGRESS** status until CloudFormation receives a **SUCCESS** signal from the instance. In the screenshot above, the **UniqueId** of **i-0fd18c8deb52983d5** belongs to the WebServer instance. 

After the success signal is received, the WebServer instance is transitioned into the **CREATE_COMPLETE** status. 

Without the CloudFormation signal helper script, CloudFormation would have transitioned the EC2 instance to a completed status when the resource was created instead of waiting until the Apache service has been installed and running on the instance. 

10\. Click the **Outputs** tab on the **web-server-stack** page:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220421115446-12-15b6ebff-5017-4f38-8be6-43b82fb8f1d3.png)

11\. Right-click and open the **WebServerPublicDNS** URL in a new browser tab:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220421115526-13-6b325ec1-b9cb-4edc-981f-aa54d2cc2fc3.png)

The HTMLpage generated in the cfn-init script is now being served from the Apache server running within your WebServer EC2 instance:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220421115613-14-74080d13-05fb-406f-a63b-cd5fe05c428e.png)
