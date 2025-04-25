package main

import (
    "github.com/gin-gonic/gin"
    "github.com/thenamann/book-store/backend/routes"
)

func main() {
    r := gin.Default()

    // Register routes
    routes.RegisterRoutes(r)

    // Start the server
    r.Run(":8080") // Runs on http://localhost:8080
}
