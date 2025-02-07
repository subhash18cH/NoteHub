package com.subhash.backend.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import java.util.Set;

@Data
public class SignupRequest {

    private String username;

    @Email
    private String email;

    @Setter
    @Getter
    private Set<String> role;

    @NotBlank
    private String password;
}

