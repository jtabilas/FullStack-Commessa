package com.example.commessa.exception;

public class IdChangeNotAllowedException extends RuntimeException {

    public IdChangeNotAllowedException(String message) {
        super(message);
    }
}

