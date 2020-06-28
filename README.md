# nodejs14-top-level-await

---

## Run on Docker

```
$ npm run docker
```

## Run on Kubernetes

### Start K8s cluster

```
$ minikube start --feature-gates='TTLAfterFinished=true'
```

### Apply Job

```
$ kubectl apply -f k8s-job.yaml
$ kubectl logs -f $(kubectl get pods --selector=job-name=job-nodejs14-top-level-await --output=jsonpath='{.items[0].metadata.name}')
```

The Job pods will be automatically removed thanks to TTLAfterFinished feature.
