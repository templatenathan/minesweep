terraform {
  required_providers {
    sonarcloud = {
      source  = "rewe-digital/sonarcloud"
      version = "0.5.2"
    }
  }

  cloud {
    organization = "templatenathan"

    workspaces {
      name = "templatenathan"
    }
  }
}

resource "sonarcloud_project" "minesweeperr" {
  key        = "minesweeperr"
  name       = "minesweeperr"
  visibility = "public"
}
