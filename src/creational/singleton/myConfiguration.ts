import config from "../../config.json";

/* The MyConfiguration class is a singleton that provides access to the configuration settings in the
config.json file */
export class MyConfiguration {
  /* Creating a singleton class. */
  private static instance: MyConfiguration;
  private static _connectionString: string;
  private static _enviroment: string;
  private static _apiUrl: string;

  private constructor() {}

  /**
   * > This function initializes the static properties of the MyConfiguration class
   */
  private static initialize(): void {
    MyConfiguration._connectionString = config.connectionString;
    MyConfiguration._enviroment = config.enviroment;
    MyConfiguration._apiUrl = config.apiUrlBase;
  }

  /**
   * If the instance is not set, then create a new instance and initialize it
   * @returns The instance of the class.
   */
  public static getInstance(): MyConfiguration {
    if (!MyConfiguration.instance) {
      MyConfiguration.instance = new MyConfiguration();
      MyConfiguration.initialize();
    }
    return MyConfiguration.instance;
  }

  get connectionString(): string {
    return MyConfiguration._connectionString;
  }

  get enviroment(): string {
    return MyConfiguration._enviroment;
  }

  get apiUrl(): string {
    return MyConfiguration._apiUrl;
  }
}
