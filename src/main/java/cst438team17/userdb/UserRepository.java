package cst438team17.userdb;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;
import cst438team17.userdb.entities.Users;

@Repository
public interface UserRepository extends MongoRepository<Users,String> {
    @Query (value = "{'id':?0}")   
    Users findByRepoId(String id);

    @Query (value = "{'funds.funds':?0}")
    List<Users> findByFunds(Double funds);

}