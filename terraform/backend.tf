terraform {
  backend "s3" {
    bucket = "983510677257-misc"
    key    = "christmas-too/main/terraform.tfstate"
    region = "us-east-1"
  }
}
