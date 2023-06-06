const Helper = {
  calculateMinimumTime: (sequence) => {
    // Parse sequence string into array
    const buttons = sequence.split(" ").reduce((acc, currRobot, index, array) => {
      if (index % 2 === 0) {
        acc.push({
          robot: currRobot,
          position: parseInt(array[index + 1]),
        });
      }
      return acc;
    }, []);

    // Initialize the positions of the robots and the time elapsed
    const robot = {
      A: {
        time: 0,
        position: 1
      },
      B: {
        time: 0,
        position: 1
      },
      
    }
    let timeElapsed = 0;

    // Calculate and store last postition and time for each robot
    buttons.forEach (button => {
      const distance = Math.abs(robot[button.robot].position - button.position);
      // +1 is time for robot to press the button
      timeElapsed = Math.max(timeElapsed, robot[button.robot].time + distance) + 1;
      robot[button.robot] = {
        time: timeElapsed,
        position: button.position
      };
    });

    // Return the minimum time required to push all the buttons
    return timeElapsed;
  }
}

export default Helper;