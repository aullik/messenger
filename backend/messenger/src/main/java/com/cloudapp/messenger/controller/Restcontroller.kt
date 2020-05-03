package com.cloudapp.messenger.controller;

import org.springframework.web.bind.annotation.*;

@RestController
public class Restcontroller {
    @GetMapping(path = "/")
    public String index() {
        return "external";
    }
     
    @GetMapping(path = "/customers")
    public String customers() {
        return "customers";
    }

}