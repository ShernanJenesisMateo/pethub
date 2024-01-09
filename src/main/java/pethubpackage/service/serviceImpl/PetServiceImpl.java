package pethubpackage.service.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pethubpackage.dao.PetDao;
import pethubpackage.model.PetModel;
import pethubpackage.service.PetService;

@Service
public class PetServiceImpl implements PetService {
    
    @Autowired
    private PetDao petDao;

    @Override
    public List<PetModel> getAllPet() {
        return petDao.getAllPet();
    }

    @Override
    public PetModel getPet(Long pet_id) {
        return petDao.getPet(pet_id);
    }

    @Override
    public void addPet(PetModel petAdd) {
        petDao.addPet(petAdd);
    }

    @Override
    public void deletePet(Long pet_id) {
        petDao.deletePet(pet_id);
    }
    @Override
    public void updatePet(Long pet_id, PetModel petModel) {
        petDao.updatePet(pet_id, petModel);
    }
    
}
