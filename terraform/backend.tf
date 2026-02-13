terraform {
  backend "s3" {
    bucket         = "cv-site-terraform-state-bucket"
    key            = "terraform.tfstate"
    region         = "eu-west-3"
  }
}