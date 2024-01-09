package pethubpackage.model;

import java.sql.Timestamp;

import lombok.Data;

@Data
public class PetModel {
    private Long pet_id;
    private String pet_name;
    private Long pet_specie_id;
    private String pet_breed;
    private Long pet_gender_id;
    private int pet_age;
    private String pet_description;
    private Long prev_guardian_id;
    private Long new_guardian_id;
    private boolean is_available_to_adopt;
    private Timestamp adoption_date_time;
    private Timestamp admission_date_time;
    private boolean is_deleted;
}
