package cst438team17.userdb;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import cst438team17.userdb.entities.Users;

@Component
public class UserdbSeeder implements CommandLineRunner{
    @Autowired
    UserRepository userRepo;

    @Override
    public void run(String... args) throws Exception {
        Users Austin = new Users("Austin", 500.00);
        Users Ariel = new Users("Ariel", 500.00);
        Users Sean = new Users("Sean", 500.00);
        Users Alfonso = new Users("Alfonso", 500.00);

        //delete db data
        userRepo.deleteAll();
        //add db seeds
        List<Users> users = Arrays.asList(Austin, Ariel, Sean, Alfonso);
        userRepo.saveAll(users);
    }

}