package storagebox.services;

import storagebox.dto.UserDTO;
import storagebox.entities.security.User;

import java.util.List;

public interface UserService {

    public List<UserDTO> findAll();

    public UserDTO findById(long id);

    public void update(long id, UserDTO userDTO);

    public void delete(long id);


}