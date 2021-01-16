const draftTeam = (employeeArr) => {
  const managerCard = (manager) => {
    return `
   
    <div class="card shadow" style="width: 18rem;">
    <div class="card-body bg-danger">
      <h5 class="card-title">${manager.getName()}</h5>
      <p class="card-text manager"><i class="fas fa-briefcase"></i> Manager</p>
    </div>
    <div class="container bg-secondary p-4">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${manager.getId()}</li>
      <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
      <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
    </ul>
    </div>
  </div>
 `;
  };

  const engineerCard = (engineer) => {
    return `
   
    <div class="card shadow" style="width: 18rem;">
    <div class="card-body bg-danger">
      <h5 class="card-title">${engineer.getName()}</h5>
      <p class="card-text engineer"><i class="fas fa-tools"></i> Engineer</p>
    </div>
    <div class="container bg-secondary p-4">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${engineer.getId()}</li>
      <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
      <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
    </ul>
    </div>
  </div>
 `;
  };

  const internCard = (intern) => {
    return `
   
  <div class="card shadow" style="width: 18rem;">
    <div class="card-body bg-danger">
      <h5 class="card-title">${intern.getName()}</h5>
      <p class="card-text intern"><i class="fas fa-coffee"></i> Intern</p>
    </div>
    <div class="container bg-secondary p-4">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${intern.getId()}</li>
      <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
      <li class="list-group-item">Office Number: ${intern.getSchool()}</li>
    </ul>
    </div>
  </div>
  `;
  };

  const html = [];

  html.push(
    employeeArr
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => managerCard(manager))
  );

  html.push(
    employeeArr
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => engineerCard(engineer))
  );

  html.push(
    employeeArr
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => internCard(intern))
  );

  return html.join(" ");
};

module.exports = (employeeArr) => {
  return `
  
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Builder</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    </head>
<body>
<div class="jumbotron bg-danger jumbotron-fluid">
  <div class="container text-center">
    <h1 class="display-4">Team Manager</h1>
  </div>
</div>
<main>
 <div class="d-flex justify-content-around">
  ${draftTeam(employeeArr)}
 </div>
</main>
</body>
</html>
  `;
};