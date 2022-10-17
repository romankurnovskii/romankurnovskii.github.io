---
title: "Serverless: Flask+API Gateway+Lambda+MongoDB"
description: Create AWS serverless application on Flask + API Gateway + Lambda + MongoDB
toc: true
tags: [aws, flask, serverless, mongodb, lambda]
series: []
categories: [AWS]
date: "2022-09-06"
featuredImage: https://picsum.photos/701/234
authors: [roman-kurnovskii]
draft: false
---

mongodb free tier vs documentdb

## Project structure

```
- src
  - app.py
  - mongo.py
- .env
- requirements.txt
- serverless.yml
```

[Sources](https://github.com/romankurnovskii/romankurnovskii.github.io/tree/main/content/posts/serverless-flask-lambda-api-gateway-mongodb/example)

## Add AIM user

Setup specific user for serverless deployment

**username**: serverless-deployer

- [aws aim](https://us-east-1.console.aws.amazon.com/iam/home#/users$new?step=details)
- [documentation](https://www.serverless.com/framework/docs/providers/aws/guide/credentials)

![](aws-aim-setup-user.png)

### Set policy

Create:

1. ServerLessDeployerPolicyGroup
2. ServerLessDeployerPolicy

**Policy:**

```json
{
    "Statement": [
        {
            "Action": [
                "apigateway:*",
                "cloudformation:CancelUpdateStack",
                "cloudformation:ContinueUpdateRollback",
                "cloudformation:CreateChangeSet",
                "cloudformation:CreateStack",
                "cloudformation:CreateUploadBucket",
                "cloudformation:DeleteStack",
                "cloudformation:Describe*",
                "cloudformation:EstimateTemplateCost",
                "cloudformation:ExecuteChangeSet",
                "cloudformation:Get*",
                "cloudformation:List*",
                "cloudformation:UpdateStack",
                "cloudformation:UpdateTerminationProtection",
                "cloudformation:ValidateTemplate",
                "dynamodb:CreateTable",
                "dynamodb:DeleteTable",
                "dynamodb:DescribeTable",
                "dynamodb:DescribeTimeToLive",
                "dynamodb:UpdateTimeToLive",
                "ec2:AttachInternetGateway",
                "ec2:AuthorizeSecurityGroupIngress",
                "ec2:CreateInternetGateway",
                "ec2:CreateNetworkAcl",
                "ec2:CreateNetworkAclEntry",
                "ec2:CreateRouteTable",
                "ec2:CreateSecurityGroup",
                "ec2:CreateSubnet",
                "ec2:CreateTags",
                "ec2:CreateVpc",
                "ec2:DeleteInternetGateway",
                "ec2:DeleteNetworkAcl",
                "ec2:DeleteNetworkAclEntry",
                "ec2:DeleteRouteTable",
                "ec2:DeleteSecurityGroup",
                "ec2:DeleteSubnet",
                "ec2:DeleteVpc",
                "ec2:Describe*",
                "ec2:DetachInternetGateway",
                "ec2:ModifyVpcAttribute",
                "events:DeleteRule",
                "events:DescribeRule",
                "events:ListRuleNamesByTarget",
                "events:ListRules",
                "events:ListTargetsByRule",
                "events:PutRule",
                "events:PutTargets",
                "events:RemoveTargets",
                "iam:AttachRolePolicy",
                "iam:CreateRole",
                "iam:DeleteRole",
                "iam:DeleteRolePolicy",
                "iam:DetachRolePolicy",
                "iam:GetRole",
                "iam:PassRole",
                "iam:PutRolePolicy",
                "iot:CreateTopicRule",
                "iot:DeleteTopicRule",
                "iot:DisableTopicRule",
                "iot:EnableTopicRule",
                "iot:ReplaceTopicRule",
                "kinesis:CreateStream",
                "kinesis:DeleteStream",
                "kinesis:DescribeStream",
                "lambda:*",
				"logs:CreateLogDelivery",
                "logs:CreateLogGroup",
                "logs:DeleteLogGroup",
                "logs:DescribeLogGroups",
                "logs:DescribeLogStreams",
                "logs:FilterLogEvents",
                "logs:GetLogEvents",
                "logs:PutSubscriptionFilter",
                "s3:CreateBucket",
                "s3:DeleteBucket",
                "s3:DeleteBucketPolicy",
                "s3:DeleteObject",
                "s3:DeleteObjectVersion",
                "s3:GetObject",
                "s3:GetObjectVersion",
                "s3:ListAllMyBuckets",
                "s3:ListBucket",
                "s3:PutBucketNotification",
                "s3:PutBucketPolicy",
                "s3:PutBucketTagging",
                "s3:PutBucketWebsite",
                "s3:PutEncryptionConfiguration",
                "s3:PutObject",
                "sns:CreateTopic",
                "sns:DeleteTopic",
                "sns:GetSubscriptionAttributes",
                "sns:GetTopicAttributes",
                "sns:ListSubscriptions",
                "sns:ListSubscriptionsByTopic",
                "sns:ListTopics",
                "sns:SetSubscriptionAttributes",
                "sns:SetTopicAttributes",
                "sns:Subscribe",
                "sns:Unsubscribe",
                "states:CreateStateMachine",
                "states:DeleteStateMachine"
            ],
            "Effect": "Allow",
            "Resource": "*"
        }
    ],
    "Version": "2012-10-17"
}
```

### Create user

copy the API Key & Secret

Need during setup aws cli/serverless

## Create serverless.yml

In the root folder create:

```yml
org: romankurnovskii
app: app-name
service: app-service-name

frameworkVersion: '3'

useDotenv: true

custom:
  wsgi:
    app: src/app.app
    packRequirements: false

provider:
  name: aws
  deploymentMethod: direct
  region: eu-west-1
  runtime: python3.9
  architecture: arm64
  versionFunctions: false
  memorySize: 128

functions:
  api:
    handler: wsgi_handler.handler
    events:
      - httpApi: '*'
    environment:
      MONGO_CONNECTION_STRING: ${env:MONGO_CONNECTION_STRING}
      MONGO_COLLECTION_DB_NAME: ${env:MONGO_COLLECTION_DB_NAME}

package:
  patterns:
    - '!.dynamodb/**'
    - '!.git/**'
    - '!.vscode/**'
    - '!.env'
    - '!node_modules/**'
    - '!tmp/**'
    - '!venv/**'
    - '!__pycache__/**'

plugins:
  - serverless-wsgi
  - serverless-python-requirements
```

## Create Flask app

### Prerequisites

```bash
python -m venv ./venv
source ./venv/bin/activate
```

### App


**src/app.py**

```python
from flask import Flask, ObjectId, request, jsonify, make_response
from flask_cors import CORS
import json
from src.mongo import my_db


users_collection = my_db.users


app = Flask(__name__)
cors = CORS(app)


@app.route("/", methods=['GET'])
def get_user(user_id):
    user_id = request.args.get('id')
    user = users_collection.find_one({"_id": ObjectId(user_id)})
    if not user:
        return jsonify({'error': 'data not found'}), 404
    return jsonify({'user': user}) 


@app.route('/', methods=['PUT'])
def create_record():
    record = json.loads(request.data)
    user_id = record.get('user_id', None)
    users_collection.update_one({"_id": ObjectId(user_id)}, record)


@app.route("/")
def hello():
    return jsonify(message='Hello!')


@app.errorhandler(404)
def resource_not_found(e):
    return make_response(jsonify(error='Not found!'), 404)


def internal_server_error(e):
    return 'error', 500


app.register_error_handler(500, internal_server_error)
```

**src/mongo.py**

```python
import os

from pymongo import MongoClient

MONGO_CONNECTION_STRING = os.environ.get(
    "MONGO_CONNECTION_STRING", default="mongodb://localhost:27017/"
)
MONGO_COLLECTION_DB_NAME = os.environ.get(
    "MONGO_COLLECTION_DB_NAME", default="test-mydb"
)


db_client = MongoClient(MONGO_CONNECTION_STRING)
my_db = db_client[MONGO_COLLECTION_DB_NAME]
```

**.env**

```
MONGO_CONNECTION_STRING=mongodb+srv://login:password@cluster0.XXXXX.mongodb.net/mydb?retryWrites=true&w=majority
MONGO_COLLECTION_DB_NAME=mydb
```

**src/requirements.txt**

```
certifi==2022.6.15
charset-normalizer==2.1.1
click==7.1.2
dnspython==2.2.1
ecdsa==0.18.0
Flask==1.1.4
Flask-Cors==3.0.10
idna==3.3
importlib-metadata==4.12.0
itsdangerous==1.1.0
Jinja2==2.11.3
jmespath==1.0.1
MarkupSafe==2.0.1
pyasn1==0.4.8
pymongo==4.2.0
python-dateutil==2.8.2
python-dotenv==0.20.0
requests==2.28.1
rsa==4.9
six==1.16.0
urllib3==1.26.12
Werkzeug==1.0.1
zipp==3.8.1
```

### Deployment

```
serverless login
```

install dependencies with:

```
npm install
```

and

```
pip install -r requirements.txt
```

and then perform deployment with:

```
serverless deploy
```

After running deploy, you should see output similar to:

```bash
Deploying app-service-name to stage dev (eu-west-1)

✔ Service deployed to stack app-service-name (182s)
```


### Local development

Thanks to capabilities of `serverless-wsgi`, it is also possible to run your application locally, however, in order to do that, you will need to first install `werkzeug` dependency, as well as all other dependencies listed in `requirements.txt`. It is recommended to use a dedicated virtual environment for that purpose. You can install all needed dependencies with the following commands:

Already in requirements.txt:

```bash
pip install werkzeug
pip install -r requirements.txt
```

At this point, you can run your application locally with the following command:

```bash
serverless wsgi serve
```

For additional local development capabilities of `serverless-wsgi` plugin, please refer to corresponding [GitHub repository](https://github.com/logandk/serverless-wsgi).