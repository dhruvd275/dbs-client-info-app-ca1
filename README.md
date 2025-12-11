# Client Info GCP App

This repository contains my cloud deployment assignment for the Client Information app using Google Cloud Platform. It is based on the class sample but configured and deployed by me using App Engine, Cloud SQL, Secret Manager, and Cloud Build.

CI/CD: Cloud Build trigger test.

#creating a trigger for Gcloud
gcloud beta builds triggers create github \
  --name="deploy-client-info-app" \
  --repo-owner="dhruvd275" \
  --repo-name="dbs-client-info-app-ca1" \
  --branch-pattern="^main$" \
  --build-config="cloudbuild.yaml"
