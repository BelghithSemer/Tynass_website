package com.tynass.tynass_backend.Repositorys;

import com.tynass.tynass_backend.models.Trip;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TripRepository extends MongoRepository <Trip , String> {
}
