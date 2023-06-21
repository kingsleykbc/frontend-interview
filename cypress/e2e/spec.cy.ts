describe('template spec', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000');
	});

	it('should display applications', () => {
		cy.get('[data-testid="applications"]').should('exist');
	});

	it('should load more applications', () => {
		cy.get("[data-testid='loadMoreButton']").should('contain', 'Load more').click();
	});
});

// describe('My First Test', () => {
// 	it('Does not do much!', () => {
// 		expect(true).to.equal(true);
// 	});
// });
