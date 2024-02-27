// React Testing Exercises 

// Part 1 
// What components have state and how does that state get changed? 
/*  
    ( What components have state )
    - Carousel recieves data from the App
    - Card recieves props from the Carousel
    
    
    ( How does that state get changed )
    Since the Carousel or Card components have no local state, the 
    state changes would occur from the App component or a parent of
    the App component

    These changes would then be passed on to the Carousel and Card 
    components 
*/

// Part 2 
// Write both a smoke and snapshot test for each component

it("works when you click on the right arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});

//Part 3
// Write a test that expects when you are on the second image clicking
// the left arrow will move you to the first image

it("clicking left arrow moves to previous image", function() {
    const { container } = render(
      <Carousel
        photos={TEST_IMAGES}
        title="images for testing"
      />
    );
  
    // Start at the second image
    fireEvent.click(container.querySelector(".bi-arrow-right-circle"));
  
    // Verify that the second image is currently displayed
    expect(
      container.querySelector('img[alt="testing image 2"]')
    ).toBeInTheDocument();
  
    // Click the left arrow
    const leftArrow = container.querySelector(".bi-arrow-left-circle");
    fireEvent.click(leftArrow);
  
    // Expect the first image to be displayed after clicking the left arrow
    expect(
      container.querySelector('img[alt="testing image 1"]')
    ).toBeInTheDocument();
  });

// Part 4
// Write a failing test to check that the left arrow is missing when you are
// on the first image and that the right arrow is missing when you are on the last image 


it("hides left arrow when on first image and hides right arrow when on last image", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );

  expect(container.querySelector(".bi-arrow-left-circle")).toBeInTheDocument();
  expect(container.querySelector(".bi-arrow-right-circle")).toBeInTheDocument();

  fireEvent.click(container.querySelector(".bi-arrow-right-circle"));
  fireEvent.click(container.querySelector(".bi-arrow-right-circle"));

  expect(container.querySelector(".bi-arrow-left-circle")).toBeInTheDocument();
  expect(container.querySelector(".bi-arrow-right-circle")).not.toBeInTheDocument();

  fireEvent.click(container.querySelector(".bi-arrow-left-circle"));

  expect(container.querySelector(".bi-arrow-left-circle")).not.toBeInTheDocument();
  expect(container.querySelector(".bi-arrow-right-circle")).toBeInTheDocument();
});





