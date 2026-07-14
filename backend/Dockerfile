# Stage 1: Build the application using JDK 21
FROM eclipse-temurin:21-jdk-alpine AS build
WORKDIR /workspace/app

# Install dos2unix to ensure script compatibility
RUN apk add --no-cache dos2unix

# Copy Maven wrapper files and prepare them for execution
COPY mvnw .
RUN dos2unix mvnw && chmod +x mvnw

# Copy the rest of the project
COPY .mvn .mvn
COPY pom.xml .
COPY src src

# Build the JAR file skipping tests
RUN ./mvnw clean package -DskipTests

# Stage 2: Create the production runtime image
FROM eclipse-temurin:21-jre-alpine
WORKDIR /app

# Create a secure, non-root user
RUN addgroup -S spring && adduser -S spring -G spring
USER spring:spring

# Copy the specific built JAR from the build stage
COPY --from=build /workspace/app/target/SoleMate-0.0.1-SNAPSHOT.jar app.jar

# Expose Render's standard web service port
EXPOSE 8080

# Execute with Java 21 preview features enabled
ENTRYPOINT ["sh", "-c", "java --enable-preview -jar app.jar --server.port=${PORT:-8080}"]