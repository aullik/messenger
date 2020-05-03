package com.cloudapp.messenger.controller

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class Restcontroller {
    @GetMapping("/")
    fun index(): String {
        return "external"
    }

    @GetMapping("/customers")
    fun customers(): String {
        return "customers"
    }
}