package com.tynass.tynass_backend.models;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.annotation.Id;

@Document(collection = "trips")
@Getter
@Setter
public class Trip {

    @Id
    private String id;
    private String htmlContent; // For storing the complete HTML content
    private String tynassTripName; // New field for trip name

    // Getters and setters (optional, Lombok will generate these)
}
