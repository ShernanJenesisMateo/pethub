package pethubpackage.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import pethubpackage.model.PetModel;

@Mapper
public interface PetDao {
    List<PetModel> getAllPet();
    PetModel getPet(Long pet_id);
    void addPet(PetModel petAdd);
    // void deletePet();
    // void updatePet();

}
