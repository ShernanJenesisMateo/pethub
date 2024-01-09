package pethubpackage.service;

import java.util.List;

import pethubpackage.model.PetModel;

public interface PetService {
    public List<PetModel> getAllPet();
    public PetModel getPet(Long pet_id);
    public void addPet(PetModel petAdd);
    public void deletePet(Long pet_id);
    // public void updatePet();
}
