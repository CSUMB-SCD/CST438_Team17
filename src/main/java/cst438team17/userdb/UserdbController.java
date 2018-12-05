package cst438team17.userdb;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import cst438team17.userdb.entities.Users;

@RestController
public class UserdbController{

    @Autowired
    UserRepository UsersRepository;

    @GetMapping ("/allUsers")
    public List<Users> getAll () {
        List<Users> result = UsersRepository.findAll();
        return result;
    }
    	
    @GetMapping("/id/{id}")
    public Users getUserById (@PathVariable String id) {
        Users result = UsersRepository.findByRepoId(id);
        return result;
    }

    @GetMapping("/funds/{funds}")
    public List<Users> getByFunds (@PathVariable Double funds) {
        List<Users> result = UsersRepository.findByFunds(funds);
        return result;
    }

}

