package cst438team17.userdb.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document (collection="User")
public class Users{
    @Id
    private String id;
    private String username;
    private Double funds;

    public Users(String name, Double money){
        this.username = name;
        this.funds = money;
    }

    public String getUsername(){
        return username;
    }

    public Double getFunds(){
        return funds;
    }

    public String getId(){
        return this.id;
    }

}


