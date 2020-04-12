<br />
<p align="center">
  <h3 align="center">Autoscaling in Kubernetes</h3>

  <p align="center">
    CECS 574
    <br /> 
    CSULB Master Program, Spring 2020
    <br />
    <br />
  </p>
</p>

<!-- ABOUT THE PROJECT -->

## Authors

[Liam Nguyen](https://github.com/liam-nguyen)

[Neha Bhoi](https://github.com/Nehabhoi)

## About The Project

This project explores kubernetes and autoscaling capability of Kubernetes.

The demo focuses on the horizontal scaler. The demo runs on 1 local cluster created by Minikube.

### Prerequisites

- [NodeJS](https://nodejs.org/en/)
- [Docker](https://www.docker.com/)
- [Kubernetes](https://kubernetes.io/)
- [Minikube](https://kubernetes.io/docs/tasks/tools/install-minikube/)

## Commands

### Minikube

- To start minikube in Windows:

```
minikube start --vm-driver virtualbox  --kubernetes-version=1.17.0
```

- To start minikube in Mac:

```
minikube start
```

- To get the IP of cluster in minikube:

```
minikube ip
```

- To stop minikube:

```
minikube stop
```

### Kubernetes

- To use a dashboard to visualize kubernetes resources:

```
minikube dashboard
```

- Kubernetes commands

```
kubectl get nodes
kubectl get deployments
kubectl get services
kubectl get rs       // get replicaset
```

- To apply a resource to kubernetes, in the directory with YAML file, use:

```
go to working directory
kubectl apply -f demo-deployment.yaml
kubectl apply -f .\demo-service.yaml
kubectl apply -f .\demo-hpa.yaml
```

- To manually horizontally scale in kubernetes:

```
kubectl scale --replicas=3 deploy/demo-deployment
```

- To delete resource.

```
kubectl delete [resource name]
```

**Note**: resource name can be found by using command:

```
kubectl get all
```

### Test scripts

- Test scrips are example of ways to increase the workload of deployments, forcing them to horizontal scale if hpa exits.

```
test-large.sh   //100 million iterations
test-medium.sh  // 5 million iterations
test-small.sh   // 10 thousand iterations
test-traffic.sh // get front page
```

## Guide

- Install all prerequisites
- Apply 3 yaml files by using command

```
kubectl apply -f [yaml filename]
```

- Run test script

```sh
sh [test filename]
```

## Documents

- Midterm 1 page summary
- Midterm presentation
- Final Paper
- Final presentation
