---
title: Introduction to AWS Step Functions
description: Tutorial Introduction to AWS Step Functions
toc: true
date: 2022-07-06
---

## Lab

- [Introduction to AWS Step Functions](https://cloudacademy.com/lab/introduction-aws-step-functions/)

## Explaining what is AWS Step Functions

![alt](https://assets.cloudacademy.com/bakery/media/uploads/lab-step/blobid1-8d767f52-9d7d-4201-8ada-0940e986c296.png)

Once started, you can see that four tasks are executed simultaneously, then the result is analyzed before the Step Function completes.


## Explaining what you are going to build with Step Functions

![alt](https://assets.cloudacademy.com/bakery/media/uploads/lab-step/blobid1-29a3682c-7840-4ded-b718-c1b67c9590d2.png)

The JSON necessary to create this chart is shown below and you will analyze it in greater detail in the following steps:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/lab-step/blobid1-2385fe75-96fd-47cc-97bc-aac7d242fce4.png)

You can also find it [here](https://raw.githubusercontent.com/cloudacademy/labs-aws-step-functions/master/Introduction_schema_template.json "JSON template").

As you can see, this is not a linear flow. Thankfully, AWS Step Functions provides different types of steps. This is an introductory lab on this service so you will not carry out every step type. You will, however, include the parallel and conditional step types in this lab.

## Creating Parallel Step Type

Recall that in the example scenario you have three main tasks to perform:

1.  Generate a report
2.  Update DynamoDB tables
3.  Log a metric to CloudWatch

The first two are completely independent tasks, whereas the last one must be executed only when the previous tasks are completed. In order to minimize the amount of time needed to complete the entire process, you will generate the report and update the database in parallel. Of course, parallel tasks are possible here because the tasks are not dependent upon each other.

Below you can see the JSON snippet that defines the `Parallel` task, along with its branches:

```json
{
     "Comment": "An example of the Amazon States Language using a parallel state to execute two branches at the same time.",
     "StartAt": "StartTask",
     "States": {
        "StartTask": {
            "Type": "Parallel",
            "Next": "CWMetric",
            "Branches": [...]
        }
    }
}
```


The JSON template to define a flow is composed of different fields and each one defines a different aspect of the flow that you are building.  
The `StartAt` field defines the first state where the flow begins and the `States` object contains the definitions of all reachable states.

Going back to the example, it begins from the `StartTask` state. This is a `Parallel` state (as you can see in its `Type` property) and for this reason, it is made up of branches. This is a very powerful feature in Step Functions because here you can define a sub-flow of tasks that can include all the kinds of tasks you need. Also note that every branch has both the `StartAt` and the `States` property. In the `StartAt` property, you have to declare where the branch starts. In the `States` property, you declare every state of the branch.

The first parallel task `branch` that will make up the JSON template will be `Gen Report`. `Gen Report` is a very simple one; its `Type` is also `Task`. This means that it represents a Lambda Function and for this reason, you have to specify the function's Amazon Resource Name (ARN) in its `Resource` field.

You can see this in the `branches` object of the template below (lines 6-15):

```json
{
    "StartTask": {
        "Type": "Parallel",
        "Next": "CWMetric",
        "Branches": [
            {
                "StartAt": "Gen Report",
                "States": {
                    """ Here you can define all your branches """
                    "Gen Report": {
                        "Type": "Task",
                        "Resource": "arn:aws:lambda:REGION:ACCOUNT_ID:function:FUNCTION_NAME"
                    }
                }
            }
            """ UpdateDB branch goes here """
        ]
    }
}
```


In order to implement the flow, you will have to create a Lambda Function that executes this task.

_Note_: This Lambda function will utilize an S3 bucket. Before creating the Lambda function, you need to know what S3 bucket to use. Cloud Academy has already created one for you. You will navigate to the S3 console and read the bucket name. It should be something similar to: . Be sure to copy the bucket name into a buffer, as you will need it shortly.

1\. In the AWS Management Console search bar, enter _S3_, and click the **S3** result under **Services**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220420102833-3-dbc4136f-3147-478f-9015-3d2396f11ab9.png)

You will be placed in the S3 console.

2\. Take note of the S3 bucket name:

![alt](https://assets-stage.cloudacademy.com/bakery/media/uploads/blobid1-12a2938d-9997-4dcd-8201-b9f33b862983.png)

It should be something similar to: 

3\. In the AWS Management Console search bar, enter _Lambda_, and click the **Lambda** result under **Services**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220420102901-4-1486ccd9-e8ad-464f-94a3-dc931574c5d6.png)

4\. Click on **Create function**.

5\. Check **Author from scratch** and fill all fields as given below:

* **Function name**: _GenerateReport_
* **Runtime**: _Python 3.7_

6\. Toggle the drop-down **Change default execution role** and fill all fields as given below:

* Select **Use an existing role**
* **Existing role**: 

7\. Click on **Create function**.

8\. Navigate to the **Code source** section and double-click **lambda_function.py**. You will replace the contents with the code below:

```python
import boto3
bucket_name = "BUCKET_NAME"
s3_client = boto3.client('s3')
def lambda_handler(event, context):
    level = event.get('level')
    user_id = event.get('user_id')
    score = event.get('score')
    max_score = event.get('max_score')
    report = 'Completed Level: %s\nMy Score: %s\%s\n' % (level, score, max_score)
    s3_client.put_object(
        ACL='public-read',
        Bucket=bucket_name,
        Key="%s_report_%s.txt" % (user_id, level),
        Body=report
    )
   
    return event
    
```
    
9\. Replace `BUCKET_NAME` with your S3 bucket name (Line 2)

_Note_: Keep the quotation marks.

10\. To deploy your function, click **Deploy**:

**![alt](https://assets-stage.cloudacademy.com/bakery/media/uploads/blobid2-8e8cc0c6-28bf-44e4-9bfa-cb5e14ed99e4.png)**

Consider what this function is going to receive as the event parameter. In general, a given function uses the output returned from a preceding function and receives it as its input. However, the first function of the flow (like in this case) receives the **event** provided when the flow starts. At the end of the lab, you will see that when you start an execution you can provide a start event.

Looking at your code, you can see that this Lamba Function is very simple and only calls the `s3.put_object` API to upload the simple report.

## Creating Conditional Step Type

In many scenarios, the flow is dependent upon a choice. In order to fulfill this requirement, AWS Step Functions provides a `Choice` step.

The second branch starts with the `UpdateDB` task and its `type` is `choice`. This means that when the flow arrives here, a choice has to be made, and it is up to AWS Step Functions to make that choice. The next step that gets executed is based on the choice.

In the `Choices` field on line 6, you would typically declare a series of comparisons. In this case, there are only two possibilities so there would need to be one comparison declared, using the `Default` field that explains which task to run in case no condition is satisfied. The conditional step template is shown below. _Note_: remember that this is just part of the larger JSON template.

```json
{
    "StartAt": "UpdateDB",
    "States": {
        "UpdateDB": {
            "Type": "Choice",
            "Choices": [{
                "Variable": "$.level",
                "StringEquals": "latest",
                "Next": "Last Level"
            }],
            "Default": "Simple Level"
        },
        "Last Level": {
            "Type": "Task",
            "Resource": "arn:aws:lambda:us-west-2:ACCOUNT_ID:function:EndsLastLevel",
            "End": true
        },
        "Simple Level": {
            "Type": "Task",
            "Resource": "arn:aws:lambda:us-west-2:ACCOUNT_ID:function:EndsSimpleLevel",
            "End": true
        }
    }
}
```

A `choice` is made up of at least three fields:

* `Variable`: The variable that needs to be evaluated, defined using JMESpath
* Kind of comparison: AWS provides different kinds of comparisons, based on the type of the variable
* `Next`: The name of the task that will be executed in case the comparison result is `true`

_Note_: Remember that only the first evaluation that is `true` is going to be executed.

In this case, `$.level` variable is evaluated. With the comparison `StringEquals` you check if its value is "latest". In this case, the  task will be executed, otherwise, the  will be excecuted instead.

AWS Step Functions handles this flow efficiently by only requiring it declared in the template, such that no additional code or Lambda function is required.

There are many more kinds of comparisons available that are self-explanatory. For example:

String comparisons:

* `StringEquals`
* `StringLessThan`
* `StringGreaterThan`
* `StringLessThanEquals`
* `StringGreaterThanEquals`

Number comparisons:

* `NumericEquals`
* `NumericLessThan`
* `NumericGreaterThan`
* `NumericLessThanEquals`
* `NumericGreaterThanEquals`

Boolean comparisons: `BooleanEquals`.

And arguably the most powerful: Timestamp conditions:

* `TimestampEquals`
* `TimestampLessThan`
* `TimestampGreaterThan`
* `TimestampLessThanEquals`
* `TimestampGreaterThanEquals`

In addition, for more structured and complex conditions, you can use the boolean operators like `And`, `Or`_,_ and `Not` as well.

Now you have to implement functions to handle database updates. To create a completely serverless architecture, you will use DynamoDB to store your information.

In this lab step you are going to create two Lambda functions:

* **EndsSimpleLevel**: This function will be called when the user ends a simple level, not the latest level
* **EndsLastLevel**: This function will be called when the user completes the last level

1\. In the AWS Management Console search bar, enter _Lambda_, and click the **Lambda** result under **Services**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220420102901-4-1486ccd9-e8ad-464f-94a3-dc931574c5d6.png)

2\. Click on **Create function**.

3\. Check **Author from scratch** and fill all fields as given below:

* **Function name**: _EndsSimpleLevel_
* **Runtime**: _Python 3.7_

4\. Toggle the drop-down **Change default execution role** and fill all fields as given below:

* Select **Use an existing role**
* **Existing role**: 

5\. Click **Create function**.

6\. Move into the **Code source** section and double-click **lambda_function.py**, replacing the contents with the code below:

```python
import time
import boto3
dynamodb_client = boto3.client('dynamodb')
table_name = 'CompletedLevel'
def lambda_handler(event, context):
    user_id = event.get('user_id')
    level = event.get('level')
    update_params = {
        "TableName": table_name,
        "Key": {
            "user_id": {
                "S": user_id
            }
        },
        "AttributeUpdates": {
            "last_level": {
                "Value": {
                    "S": level
                },
                "Action": "PUT"
            },
            "timestamp": {
                "Value": {
                    "S": str(time.time())
                },
                "Action": "PUT"
            }
        }
    }
    dynamodb_client.update_item(**update_params)
    return event
    
```

As you can see, the code is pretty simple. It calls the `update_item` API on the  table and terminates the function returning the event received. As mentioned before, the result of each function is very important because it's either what the next function will receive at the start of its flow, or the result of the entire execution.

7. To deploy your function, click **Deploy**.

You should now have two Lambda functions created for this lab. Now you will create the third and final Lambda function.

8\. Navigate back to the Lambda console. In the AWS Management Console search bar, enter _Lambda_, and click the **Lambda** result under **Services**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220420102901-4-1486ccd9-e8ad-464f-94a3-dc931574c5d6.png)

9\. Click on **Create function**.

10\. Check **Author from scratch** and fill all fields as given below:

* **Function name**: _EndsLastLevel_
* **Runtime**: _Python 3.7_

11\. Toggle the drop-down **Change default execution role** and fill all fields as given below:

* Select **Use an existing role**
* **Existing role**: 

12\. Click **Create function**.

13\. Move into the **Code source** section and double-click **lambda_function.py**, replacing the contents with the code below:

```python
import boto3
import time
table_name = 'CompletedLevel'
dynamodb_client = boto3.client('dynamodb')
def lambda_handler(event, context):
    user_id = event.get('user_id')
    total_score = event.get('total_score')
    put_params = {
        "TableName": table_name,
        "Item": {
            "user_id": {
                "S": user_id
            },
            "completed": {
                "BOOL": True
            },
            "timestamp": {
                "S": str(time.time())
            },
            "total_score": {
                "N": str(total_score)
            }
        }
    }
    dynamodb_client.put_item(**put_params)
    return event
```

This code is quite simple too. It calls the DynamoDB `put_item` API on the other table () and terminates returning the event received.

14. To deploy your function, click **Deploy**.

In the next step, you will create the last `task` that completes your flow.


## Logging Results to CloudWatch

The last Lambda function you need to create is the simplest one. It updates your  metric on CloudWatch. The task runs at the end of each branch and conditional step.

This is the representation of the task:

```
"CWMetric": {
    "Type": "Task",
    "Resource": "arn:aws:lambda:us-west-2:ACCOUNT_ID:function:PutMetric",
    "End": true
}
```

There is nothing special here, but the `End` field set to `true` indicates that after this function, the flow ends.

1\. In the AWS Management Console search bar, enter _Lambda_, and click the **Lambda** result under **Services**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220420102901-4-1486ccd9-e8ad-464f-94a3-dc931574c5d6.png)

2\. Click on **Create function**.

3\. Check **Author from scratch** and fill all fields as given below:

* **Function name**: _PutMetric_
* **Runtime**: _Python 3.7_

4\. Toggle the drop-down **Change default execution role** and fill all fields as given below:

* Select **Use an existing role**
* **Existing role**: 

5\. Click **Create function**.

This function will be executed after both branches in your first parallel step. Because it comes after a parallel step, this function will receive an array loaded with the results of all the previous functions.

6. Move into the **Code source** section of the Lambda function and double-click **lambda_function.py**, replacing the contents with the code below:

```python
import boto3
import json
cw_client = boto3.client('cloudwatch')
metric_name = 'CompleteLevel'
def lambda_handler(event, context):
    source_event = {}
    if len(event) > 0:
        source_event = event[0]
    time_played = source_event.get('time_played', False)    
    cw_client.put_metric_data(
        Namespace='FLOW',
        MetricData=[{
            "MetricName": metric_name,
            "Value": time_played,
            "Unit": "Seconds"
        }]
    )
    
    return True
``` 

Remember that the result of this function is going to be the result of your entire execution. Up until this point, each Lambda function returned the `event` parameter (which is used as input to the next step). This last step simply returns `True`. This will be the result of the entire execution.

7. To deploy your function, click **Deploy**.

In the next step, you will finally see how to both create and test this flow.

## Creating a State Machine

1. In the AWS Console search bar, search for _step functions_ and click the **Step Functions** result under **Services**:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-20220420103239-5-227cc58a-3363-4cdc-a241-8135ccaab035.png)

2\. Expand the left menu and click on **State machines:**

![alt](https://assets-stage.cloudacademy.com/bakery/media/uploads/blobid0-12179580-6994-46cf-b5d9-b7bc0f73da60.png)

3. Click on **Create state machine.**

4\. Check **Write your workflow in code **and** Type: Standard:**

**![alt](https://assets-stage.cloudacademy.com/bakery/media/uploads/blobid1-332ee213-471d-455d-b057-196db5f7ca81.png)**

_Note_: AWS provides several different kinds of blueprints to help you to get started. After the lab, it is recommended you tinker around with several different blueprints and see what happens. In this lab, you have covered only a few types of steps. You can also expand the **Help me decide** section to understand the differences between types.

5. To implement your state machine, Copy the following JSON template into the** Definition**:

```json
{
  "Comment": "An example of the Amazon States Language using a Parallel and a Choice state to execute two branches at the same time.",
  "StartAt": "StartTask",
  "States": {
    "StartTask": {
      "Type": "Parallel",
      "Next": "CWMetric",
      "Branches": [
        {
          "StartAt": "Gen Report",
          "States": {
            "Gen Report": {
              "Type": "Task",
              "Resource": "arn:aws:lambda:us-west-2:ACCOUNT_ID:function:GenerateReport",
              "End": true
            }
          }
        },
        {
          "StartAt": "UpdateDB",
          "States": {
            "UpdateDB": {
              "Type": "Choice",
              "Choices": [
                {
                  "Variable": "$.level",
                  "StringEquals": "latest",
                  "Next": "Last Level"
                }
              ],
              "Default": "Simple Level"
            },
            "Last Level": {
              "Type": "Task",
              "Resource": "arn:aws:lambda:us-west-2:ACCOUNT_ID:function:EndsLastLevel",
              "End": true
            },
            "Simple Level": {
              "Type": "Task",
              "Resource": "arn:aws:lambda:us-west-2:ACCOUNT_ID:function:EndsSimpleLevel",
              "End": true
            }
          }
        }
      ]
    },
    "CWMetric": {
      "Type": "Task",
      "Resource": "arn:aws:lambda:us-west-2:ACCOUNT_ID:function:PutMetric",
      "End": true
    }
  }
}

```

6\. Replace each occurrence of “ACCOUNT_ID” in the JSON template with your student account ID. Here are several _tips _in order to do so:

* You can get your unique Account ID from the AWS Console header by pulling down the menu (student@_&lt;AccountID&gt;_) and copying it.
* In the window, use your browser search (^F) to find all four occurrences of ACCOUNT_ID. Select each one and paste (^V) the actual ID into the template.

⚠_ Important note_: Remember to remove the hyphens in the ID after each paste into the JSON template.

7\. Click the refresh button in the visual workflow area to view the result as a flow diagram:

![alt](https://assets-stage.cloudacademy.com/bakery/media/uploads/blobid2-f9e215e3-ad7f-4b4a-88cd-0fe9a5fd0f50.png)

8\. Now click on **Next** at the bottom of the page.

The last thing you need to do is choose a name and configure the IAM Role that the AWS Step Functions service will assume to execute your state machine.

9. Proceed through the state machine wizard and enter  as the **Name**:

[![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-94bba220-bf47-4b9c-b85a-305a8ddc2c37.png)](https://raw.githubusercontent.com/cloudacademy/labs-aws-step-functions/master/Introduction_schema_template.json)

10\. Under **Permissions**, check **Choose an existing role** and select the  role under **Existing roles**:

[![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-d9f46161-8100-4c7c-9d91-0049a7c4b76d.png)](https://raw.githubusercontent.com/cloudacademy/labs-aws-step-functions/master/Introduction_schema_template.json)

This role is a service role that will be assumed by the AWS Step Functions service, the only permission that this service needs is the **lambda:invokeFunction** permission.

11\. Click **Create state machine**.

You have created your first state machine. Now it's time to run it and verify it's working correctly.

12\. As mentioned before, each execution needs an input that will be passed to the first task. Click the **Start execution** button and paste the JSON in the **Input** field.

```json
{
    "user_id": "12345678901234567890",
    "level": "latest",
    "score": 10,
    "max_score": 100,
    "time_played": 9885983982,
    "total_score": 10000
}
```

_Note_: it's ok to leave the `execution id` with the random one AWS generates for you.

In this JSON, all the parameters that your execution needs are reported. In fact, all the information about the user is included, which level has been finished, and its related scores.

13\. Click the **Start Execution** button at the lower-right of your console. Here is an example screenshot of the AWS console after successful execution of your state machine:

![alt](https://assets.cloudacademy.com/bakery/media/uploads/content_engine/image-f54ca003-e05f-463c-a63e-1a0d1f8d6ae1.png)

In the upper section, you can see the overall **Execution** **Details**. On the boxes below, you can see a flowchart that indicates which state the process is in and the **Step details**. You can expand the **Input**, **Output**, and **Exception** sections you can see detail about the status of the task and what were the input and outputs used during execution. Error information can also be displayed here, which is really useful if any debugging efforts are needed. 

At the bottom of the page is a list of all transactions and events of this execution. Observe the list of all transactions and events. You can expand/collapse each transaction by clicking on the arrow adjacent to the ID number. Of course, every Lambda call is logged to CloudWatch as well.

Now you can play around with this service using either this state machine or creating another one on your own.
