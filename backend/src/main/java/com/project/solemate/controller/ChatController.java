package com.project.solemate.controller;

import com.project.solemate.service.ChatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@CrossOrigin(origins = "${allowed.origin.url}")
@RestController
@RequestMapping("/api/chat")
public class ChatController {

    @Autowired
    private ChatService chatService;

    @PostMapping
    public ResponseEntity<Map<String, String>> askSolemate(@RequestBody ChatRequest request) {
        try {
            String aiResponse = chatService.chatWithCustomer(request.getMessage());
            return ResponseEntity.ok(Map.of("response", aiResponse));
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body(Map.of("response", "AI Platform Error: " + e.getMessage()));
        }
    }

    public static class ChatRequest {
        private String message;
        public String getMessage() { return message; }
        public void setMessage(String message) { this.message = message; }
    }
}