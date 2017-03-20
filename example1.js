// function* syntax used to make a generator
function* createLogger() {
  console.log('Start');
  yield // yield keywords pauses execution in a generator.
  console.log('Second block');
  yield
  console.log('Third block');
  yield
  console.log('End');
}

const logger = createLogger();
logger.next();
logger.next();
logger.next();
logger.next();
