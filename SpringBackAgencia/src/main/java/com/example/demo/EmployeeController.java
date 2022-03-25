package com.example.demo;

import java.util.HashMap;
import java.util.List;
import java.util.Map;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;




@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {



   @Autowired
   private EmployeeRepository employeeRepository;

   // todos os clientes
   @GetMapping("/employees")
    public List<Employee> getAllEmployees(){
         return employeeRepository.findAll();
    }

   // 
    @PostMapping("/employees")
      public Employee createEmployee(@RequestBody Employee employee) {
         return employeeRepository.save(employee);
     }

   // cadastrar cliente
    @GetMapping("/employees/{id}")
      public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) {
    
	    Employee employee = employeeRepository.findById(id)
       .orElseThrow(() -> new ResourceNotFoundException("Cliente não existe sem id :" + id));
       return ResponseEntity.ok(employee);
   }

    // atualizar

   @PutMapping("/employees/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employeeDetails){
       Employee employee = employeeRepository.findById(id)
       .orElseThrow(() -> new ResourceNotFoundException("Cliente não existe sem id :" + id));

        employee.setNome(employeeDetails.getNome());
        employee.setCpf(employeeDetails.getCpf());
        employee.setEndereco(employeeDetails.getEndereco());
        employee.setNumero(employeeDetails.getNumero());
        employee.setComplemento(employeeDetails.getComplemento());
        employee.setCidade(employeeDetails.getCidade());
        employee.setEstado(employeeDetails.getEstado());
        employee.setTelefone(employeeDetails.getTelefone());
        employee.setEmail(employeeDetails.getEmail());
     
    Employee updatedEmployee = employeeRepository.save(employee);
     return ResponseEntity.ok(updatedEmployee);
    }

    // deletar cliente
    @DeleteMapping("/employees/{id}")
     public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id){
       Employee employee = employeeRepository.findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("Cliente não existe sem id :" + id));

       employeeRepository.delete(employee);
       Map<String, Boolean> response = new HashMap<>();
       response.put("deleted", Boolean.TRUE);
       return ResponseEntity.ok(response);
   }
}