package pethubpackage.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pethubpackage.model.PetModel;
import pethubpackage.service.PetService;

@RestController
@RequestMapping("/pet")
public class PetController {
    
    @Autowired
    private PetService petService;

    @GetMapping("/all")
    public List<PetModel> getAllPet(){
        return petService.getAllPet();
    }

    @GetMapping("/{pet_id}")
    public PetModel getPet(@PathVariable("pet_id") Long pet_id){
        return petService.getPet(pet_id);
    }

    @PostMapping("/add-new-pet")
    public ResponseEntity<String> addPet(@RequestBody PetModel petModel){
        petService.addPet(petModel);
        return ResponseEntity.ok("Pet added successfully");
    }

    @PutMapping("/delete-pet/{pet_id}")
    public ResponseEntity<String> deletePet(@PathVariable("pet_id") Long pet_id){
        petService.deletePet(pet_id);
        return ResponseEntity.ok("Pet deleted successfully");
    }

    @PutMapping("/update-pet/{pet_id}")
    public ResponseEntity<String> updatePet(@PathVariable("pet_id") Long pet_id, @RequestBody PetModel petModel){
        petService.updatePet(pet_id, petModel);
        return ResponseEntity.ok("Pet updated successfully");
    }
}
