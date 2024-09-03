package com.tynass.tynass_backend.models;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.annotation.Id;

import java.util.List;

@Document(collection = "trips")
@Getter
@Setter
public class Trip {

    @Id
    private String id;
    //private String htmlContent; // For storing the complete HTML content
    //private String tynassTripName; // New field for trip name

    // Getters and setters (optional, Lombok will generate these)
    private String title;
    private String description;
    private String language;
    private String location;
    private int numberOfPlaces;
    private double price;
    private String imageUrl;

    private String tunisianAudio;
    private String frenchAudio;
    private String englishAudio;

    private List<AdventurePlace> adventurePlaces;

    private List<String> storys;
}
