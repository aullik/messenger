plugins {
    id("java")
    id("maven-publish")
}

repositories {
    mavenCentral()
    jcenter()
    mavenLocal()
}

sourceSets {
    main {
        java {
            srcDir("src/main/java")
        }
    }
}

dependencies {
    implementation("org.springframework.boot:spring-boot-starter-groovy-templates:2.2.6.RELEASE")
    implementation("org.springframework.boot:spring-boot-starter-security:2.2.6.RELEASE")
    implementation("org.springframework.boot:spring-boot-starter-web:2.2.6.RELEASE")
    implementation("org.springframework.boot:spring-boot-starter-webflux:2.2.6.RELEASE")
    implementation("org.springframework.session:spring-session-core:2.2.2.RELEASE")
    implementation("org.keycloak:keycloak-spring-boot-starter:9.0.2")
    implementation("io.dgraph:dgraph4j:20.03.0")
    implementation("io.minio:minio:7.0.2")

    testImplementation("org.springframework.boot:spring-boot-starter-test:2.2.6.RELEASE")
    testImplementation("io.projectreactor:reactor-test:3.3.4.RELEASE")
}

group = "com.cloudapp"
version = "0.0.1-SNAPSHOT"
description = "messenger"

java {
    sourceCompatibility = org.gradle.api.JavaVersion.VERSION_1_8
}


tasks.withType<JavaCompile> {
    options.encoding = ("UTF-8")
}
