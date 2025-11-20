# Use OpenJDK 17 base image
FROM eclipse-temurin:17-jdk-alpine

# Copy the built JAR into the container
COPY target/task-manager-backend-0.0.1-SNAPSHOT.jar app.jar

# Run the Spring Boot app
ENTRYPOINT ["java", "-jar", "/app.jar"]