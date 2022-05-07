---
title: '#90DaysOfDevOps - Disaster Recovery - Day 89'
published: false
description: 90DaysOfDevOps - Disaster Recovery
tags: 'devops, 90daysofdevops, learning'
cover_image: null
canonical_url: null
id: 1048718
---
## Disaster Recovery

We have mentioned already how different failure scenarios will warrant different recovery requirements. When it comes to Fire, Flood and Blood scenarios we can consider these mostly disaster situations where we might need our workloads up and running in a completely different location as fast as possible or at least with near-zero recovery time objectives (RTO). 

This can only be achieved at scale when you automate the replication of the complete application stack to a standby environment. 

This allows for fast failovers across cloud regions, cloud providers or between on-premises and cloud infrastructure. 

Keeping with the theme so far, we are going to concentrate on how this can be achieved using Kasten K10 using our minikube cluster that we deployed and configured a few sessions ago. 

We will then create another minikube cluster with Kasten K10 also installed to act as our standby cluster which in theory could be any location. 

Kasten K10 also has built in functionality to ensure if something was to happen to the Kubernetes cluster it is running on that the catalog data is replicated and available in a new one [K10 Disaster Recovery](https://docs.kasten.io/latest/operating/dr.html).

### Add object storage to K10 

The first thing we need to do is add an object storage bucket as a target location for our backups to land. Not only does this act as an offsite location but we can also leverage this as our disaster recovery source data to recover from. 

I have cleaned out the S3 bucket that we created for the Kanister demo in the last session. 

![](../images/Day89_Data1.png?v1)

Port forward to access the K10 dashboard, open a new terminal to run the below command:

`kubectl --namespace kasten-io port-forward service/gateway 8080:8000`

The Kasten dashboard will be available at: `http://127.0.0.1:8080/k10/#/`

![](../images/Day87_Data4.png?v1)

To authenticate with the dashboard, we now need the token which we can get with the following commands. 

```
TOKEN_NAME=$(kubectl get secret --namespace kasten-io|grep k10-k10-token | cut -d " " -f 1)
TOKEN=$(kubectl get secret --namespace kasten-io $TOKEN_NAME -o jsonpath="{.data.token}" | base64 --decode)

echo "Token value: "
echo $TOKEN
```

![](../images/Day87_Data5.png?v1)

Now we take this token and we input that into our browser, you will then be prompted for an email and company name. 

![](../images/Day87_Data6.png?v1)

Then we get access to the Kasten K10 dashboard. 

![](../images/Day87_Data7.png?v1)

Now that we are back in the Kasten K10 dashboard we can add our location profile, select "Settings" at the top of the page and "New Profile".

![](../images/Day89_Data2.png?v1)

You can see from the image below that we have choice when it comes to where this location profile is, we are going to select Amazon S3, and we are going to add our sensitive access credentials, region and bucket name. 

![](../images/Day89_Data3.png?v1)

If we scroll down on the New Profile creation window you will see, we also have the ability to enable immutable backups which leverages the S3 Object Lock API. For this demo we won't be using that. 

![](../images/Day89_Data4.png?v1)

Hit "Save Profile" and you can now see our newly created or added location profile as per below. 

![](../images/Day89_Data5.png?v1)

### Create a policy to protect Pac-Man app to object storage

In the previous session we created only an ad-hoc snapshot of our Pac-Man application, therefore we need to create a backup policy that will send our application backups to our newly created object storage location. 

If you head back to the dashboard and select the Policy card you will see a screen as per below. Select "Create New Policy". 

![](../images/Day89_Data6.png?v1)

First, we can give our policy a useful name and description. We can also define our backup frequency for demo purposes I am using on-demand. 

![](../images/Day89_Data7.png?v1)

Next, we want to enable backups via Snapshot exports meaning that we want to send our data out to our location profile. If you have multiple you can select which one you would like to send your backups to.

![](../images/Day89_Data8.png?v1)

Next, we select the application by either name or labels, I am going to choose by name and all resources. 

![](../images/Day89_Data9.png?v1)

Under Advanced settings we are not going to be using any of these but based on our [walkthrough of Kanister yesterday](https://github.com/MichaelCade/90DaysOfDevOps/blob/main/Days/day88.md), we can leverage Kanister as part of Kasten K10 as well to take those application consistent copies of our data. 

![](../images/Day89_Data10.png?v1)

Finally select "Create Policy" and you will now see the policy in our Policy window. 

![](../images/Day89_Data11.png?v1)

At the bottom of the created policy, you will have "Show import details" we need this string to be able to import into our standby cluster. Copy this somewhere safe for now. 

![](../images/Day89_Data12.png?v1)

Before we move on, we just need to select "run once" to get a backup sent our object storage bucket. 

![](../images/Day89_Data13.png?v1)

Below, the screenshot is just to show the successful backup and export of our data. 

![](../images/Day89_Data14.png?v1)


### Create a new MiniKube cluster & deploy K10

We then need to deploy a second Kubernetes cluster and where this could be any supported version of Kubernetes including OpenShift, for the purpose of education we will use the very free version of MiniKube with a different name. 

Using `minikube start --addons volumesnapshots,csi-hostpath-driver --apiserver-port=6443 --container-runtime=containerd -p standby --kubernetes-version=1.21.2` we can create our new cluster. 

![](../images/Day89_Data15.png?v1)

We then can deploy Kasten K10 in this cluster using:

`helm install k10 kasten/k10 --namespace=kasten-io --set auth.tokenAuth.enabled=true --set injectKanisterSidecar.enabled=true --set-string injectKanisterSidecar.namespaceSelector.matchLabels.k10/injectKanisterSidecar=true --create-namespace`

This will take a while but in the meantime, we can use `kubectl get pods -n kasten-io -w` to watch the progress of our pods getting to the running status. 

It is worth noting that because we are using MiniKube our application will just run when we run our import policy, our storageclass is the same on this standby cluster. However, something we will cover in the final session is about mobility and transformation. 

When the pods are up and running, we can follow the steps we went through on the previous steps in the other cluster. 

Port forward to access the K10 dashboard, open a new terminal to run the below command

`kubectl --namespace kasten-io port-forward service/gateway 8080:8000`

The Kasten dashboard will be available at: `http://127.0.0.1:8080/k10/#/`

![](../images/Day87_Data4.png?v1)

To authenticate with the dashboard, we now need the token which we can get with the following commands. 

```
TOKEN_NAME=$(kubectl get secret --namespace kasten-io|grep k10-k10-token | cut -d " " -f 1)
TOKEN=$(kubectl get secret --namespace kasten-io $TOKEN_NAME -o jsonpath="{.data.token}" | base64 --decode)

echo "Token value: "
echo $TOKEN
```

![](../images/Day87_Data5.png?v1)

Now we take this token and we input that into our browser, you will then be prompted for an email and company name. 

![](../images/Day87_Data6.png?v1)

Then we get access to the Kasten K10 dashboard. 

![](../images/Day87_Data7.png?v1)

### Import Pac-Man into new the MiniKube cluster

At this point we are now able to create an import policy in that standby cluster and connect to the object storage backups and determine what and how we want this to look. 

First, we add in our Location Profile that we walked through earlier on the other cluster, showing off dark mode here to show the difference between our production system and our DR standby location. 

![](../images/Day89_Data16.png?v1)

Now we go back to the dashboard and into the policies tab to create a new policy. 

![](../images/Day89_Data17.png?v1)

Create the import policy as per the below image. When complete, we can create policy. There are options here to restore after import and some people might want this option, this will go and restore into our standby cluster on completion. We also have the ability to change the configuration of the application as it is restored and this is what I have documented in [Day 90](day90.md). 

![](../images/Day89_Data18.png?v1)

I selected to import on demand, but you can obviously set a schedule on when you want this import to happen. Because of this I am going to run once. 

![](../images/Day89_Data19.png?v1)

You can see below the successful import policy job. 

![](../images/Day89_Data20.png?v1)

If we now head back to the dashboard and into the Applications card, we can then select the drop down where you see below "Removed" you will see our application here. Select Restore 

![](../images/Day89_Data21.png?v1)

Here we can see the restore points we have available to us; this was the backup job that we ran on the primary cluster against our Pac-Man application. 

![](../images/Day89_Data22.png?v1)

I am not going to change any of the defaults as I want to cover this in more detail in the next session. 

![](../images/Day89_Data23.png?v1)

When you hit "Restore" it will prompt you with a confirmation. 

![](../images/Day89_Data24.png?v1)

We can see below that we are in the standby cluster and if we check on our pods, we can see that we have our running application. 

![](../images/Day89_Data25.png?v1)

We can then port forward (in real life/production environments, you would not need this step to access the application, you would be using ingress)

![](../images/Day89_Data26.png?v1)

Next, we will take a look at Application mobility and transformation. 

## Ресурсы 

- [Kubernetes Backup and Restore made easy!](https://www.youtube.com/watch?v=01qcYSck1c4&t=217s)
- [Kubernetes Backups, Upgrades, Migrations - with Velero](https://www.youtube.com/watch?v=zybLTQER0yY)
- [7 Database Paradigms](https://www.youtube.com/watch?v=W2Z7fbCLSTw&t=520s)
- [Disaster Recovery vs. Backup: What's the difference?](https://www.youtube.com/watch?v=07EHsPuKXc0)
- [Veeam Portability & Cloud Mobility](https://www.youtube.com/watch?v=hDBlTdzE6Us&t=3s)

See you on [Day 90](day90.md)
