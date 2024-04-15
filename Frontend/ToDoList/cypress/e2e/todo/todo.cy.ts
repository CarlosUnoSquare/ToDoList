describe('To-Do - testing CRUD features', () => {
  beforeEach('Login to Page', () => {
    cy.visit('http://localhost:4200/');

    cy.get('#userNameInput').type('todo');
    cy.get('#passwordInput').type('todo123');

    cy.get('#btnLoginSubmit').click();
  });

  describe('Create To-Do item on the board', () => {
    it('Throw error when creating empty To-do', () => {
      cy.get('#btnCreateToDo').click();
      cy.get('#btnCreateToDoForm').click();

      cy.get('#titleInputError').contains("To-Do's title is requiered");
    });

    it('Create To-Do item on the board', () => {
      cy.get('#btnCreateToDo').click();

      cy.wait(500);
      cy.get('#titleInput').type('Cypress To-do item');
      cy.get('#btnCreateToDoForm').click();

      cy.get('.pending-todo')
        .last()
        .find('app-todo-item > .container-todo-item > .px-3 > #todo-title')
        .contains('Cypress To-do item');
    });
  });

  describe('Update To-Do item with id 4 on the board', () => {
    it('Update Cypress To-do item - Move to In Progress column', () => {
      cy.wait(1000);
      cy.get('.pending-todo')
        .last()
        .find('app-todo-item > .container-todo-item > .px-3')
        .click();

      cy.wait(500);

      cy.get(
        'app-todo-update > form.ng-untouched > .modal-body > #titleInput'
      ).clear();
      cy.get(
        'app-todo-update > form.ng-untouched > .modal-body > #titleInput'
      ).type('Cypress To-do item - In Progress');
      cy.get('#statusInput').select(1);
      cy.get('#btnUpdateToDoForm').click();

      cy.get('.onGoing-todo')
        .last()
        .find('app-todo-item >.container-todo-item > .px-3 > #todo-title')
        .contains('Cypress To-do item - In Progress');
    });

    it('Update Cypress To-do item - Move to Completed column', () => {
      cy.wait(1000);
      cy.get('.onGoing-todo')
        .last()
        .find('app-todo-item > .container-todo-item > .px-3')
        .click();

      cy.wait(500);
      cy.get(
        'app-todo-update > form.ng-untouched > .modal-body > #titleInput'
      ).clear();
      cy.get(
        'app-todo-update > form.ng-untouched > .modal-body > #titleInput'
      ).type('Cypress To-do item - Completed');
      cy.get('#statusInput').select(2);
      cy.get('#btnUpdateToDoForm').click();

      cy.get('.completed-todo')
        .last()
        .find('app-todo-item > .container-todo-item > .px-3 > #todo-title')
        .contains('Cypress To-do item - Completed');
    });
  });

  describe('Delete To-Do item from the board', () => {
    it('Delete Cypress To-do item to from Completed column', () => {
      cy.get('.completed-todo')
        .last()
        .find('app-todo-item > .container-todo-item > #btnShowDeleteTodo')
        .click();
      cy.wait(500);
      cy.get('#btnDeleteToDo').click();
    });
  });
});
