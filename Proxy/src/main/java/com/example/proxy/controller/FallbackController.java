package com.example.proxy.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;


@RestController
@RequestMapping("/fallback")
public class FallbackController {

    @RequestMapping(produces = {"application/json"})
    public String fallback() {
        throw new ResponseStatusException(HttpStatus.METHOD_NOT_ALLOWED);
    }
}
