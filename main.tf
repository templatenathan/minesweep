terraform {
  required_providers {
    sonarcloud = {
      source  = "rewe-digital/sonarcloud"
      version = "0.2.1"
    }
  }

  cloud {
    organization = "templatenathan"

    workspaces {
      name = "templatenathan"
    }
  }
}

resource "sonarcloud_project" "minesweep" {
  key        = "minesweep"
  name       = "minesweep"
  visibility = "public"
}
