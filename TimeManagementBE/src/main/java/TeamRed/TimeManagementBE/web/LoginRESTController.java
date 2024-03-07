package TeamRed.TimeManagementBE.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import TeamRed.TimeManagementBE.domain.AccountCredentialsDTO;
import TeamRed.TimeManagementBE.service.JwtService;

@CrossOrigin
@RestController
public class LoginRESTController {
	@Autowired
	private JwtService jwtService;

	@Autowired
	AuthenticationManager authManager;

	@PostMapping("/login")
	public ResponseEntity<?> getToken(@RequestBody AccountCredentialsDTO credentials) {
		UsernamePasswordAuthenticationToken creds = new UsernamePasswordAuthenticationToken(credentials.getUsername(),
				credentials.getPassword());
		Authentication auth = authManager.authenticate(creds);
		String jwts = jwtService.getToken(auth.getName());
		return ResponseEntity.ok()
				.header(HttpHeaders.AUTHORIZATION, "Bearer" + jwts)
				.header(HttpHeaders.ACCESS_CONTROL_EXPOSE_HEADERS, "Authorization")
				.build();

	}

}
