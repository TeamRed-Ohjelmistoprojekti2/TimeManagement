package TeamRed.TimeManagementBE.domain;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface ProjectRepository extends CrudRepository<Project, Long>{
	
	//List<Project> findByAppUser_Email(String email); // Tarpeeton?
	
	List<Project> findByAppUser(AppUser appUser);

}
