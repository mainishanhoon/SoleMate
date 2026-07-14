package com.project.solemate.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.core.ParameterizedTypeReference;

import java.util.List;
import java.util.Map;

@Service
public class ChatService {

    @Value("${spring.ai.google.genai.api-key}")
    private String apiKey;

    private final RestTemplate restTemplate = new RestTemplate();

    public String chatWithCustomer(String message) {
        String url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=" + apiKey;

        String formattedPrompt = "[SYSTEM INSTRUCTION:\n" + "1. You are Solemate, an expert AI assistant specialized ONLY in shoes, sneakers, and footwear.\n" + "2. Answer queries strictly related to shoes (size, design, brands, care, recommendations).\n" + "3. If the query is outside the shoes domain, politely decline in 1 short sentence.\n" + "4. VERY IMPORTANT: Keep your answers extremely crisp, clear, and concise. Use bullet points if listing options and avoid long paragraphs. Do not exceed 2-3 sentences unless absolutely necessary.]\n\n" + "User Message: " + message;

        Map<String, Object> requestBody = Map.of("contents", List.of(Map.of("parts", List.of(Map.of("text", formattedPrompt)))));

        try {
            HttpEntity<Map<String, Object>> entity = new HttpEntity<>(requestBody);
            ResponseEntity<Map<String, Object>> responseEntity = restTemplate.exchange(url, HttpMethod.POST, entity, new ParameterizedTypeReference<Map<String, Object>>() {
            });

            Map<String, Object> response = responseEntity.getBody();

            if (response == null || !response.containsKey("candidates")) {
                return "AI Error: Empty or invalid response layout structure from Gemini.";
            }

            List<?> candidates = (List<?>) response.get("candidates");
            if (candidates == null || candidates.isEmpty()) {
                return "AI Error: No response candidates returned.";
            }

            Map<?, ?> firstCandidate = (Map<?, ?>) candidates.getFirst();
            if (firstCandidate == null || !firstCandidate.containsKey("content")) {
                return "AI Error: Missing content block in candidate layout.";
            }

            Map<?, ?> content = (Map<?, ?>) firstCandidate.get("content");
            if (content == null || !content.containsKey("parts")) {
                return "AI Error: Parts block missing from text layout framework.";
            }

            List<?> parts = (List<?>) content.get("parts");
            if (parts == null || parts.isEmpty()) {
                return "AI Error: Empty text part arrays context.";
            }

            Map<?, ?> firstPart = (Map<?, ?>) parts.getFirst();
            if (firstPart == null || firstPart.get("text") == null) {
                return "AI Error: Resolution text body property is null.";
            }

            return firstPart.get("text").toString();

        } catch (Exception e) {
            return "AI Processing Error: " + e.getMessage();
        }
    }
}