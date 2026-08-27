terraform {
  backend "s3" {
    bucket         = "cv-site-terraform-state-bucket-368036274104-eu-west-3-an"
    key            = "terraform.tfstate"
    region         = "eu-west-3"
  }
}
