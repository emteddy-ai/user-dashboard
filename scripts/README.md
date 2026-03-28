def get_project_info():
    """Returns a dictionary containing project information."""
    return {
        "name": "User Dashboard",
        "description": "A web application for user management",
        "version": "1.0.0",
        "author": "John Doe"
    }

def get_dependencies():
    """Returns a list of project dependencies."""
    return [
        {"name": "Flask", "version": "2.0.2"},
        {"name": "SQLAlchemy", "version": "1.4.25"},
        {"name": "Werkzeug", "version": "2.0.3"}
    ]

def get_contributors():
    """Returns a list of project contributors."""
    return [
        {"name": "John Doe", "email": "john.doe@example.com"},
        {"name": "Jane Doe", "email": "jane.doe@example.com"}
    ]

def get_license():
    """Returns the project license."""
    return "MIT License"

def main():
    """Prints project information and dependencies."""
    info = get_project_info()
    dependencies = get_dependencies()
    contributors = get_contributors()
    license = get_license()

    print(f"Project Name: {info['name']}")
    print(f"Project Description: {info['description']}")
    print(f"Project Version: {info['version']}")
    print(f"Author: {info['author']}")

    print("\nDependencies:")
    for dependency in dependencies:
        print(f"- {dependency['name']} ({dependency['version']})")

    print("\nContributors:")
    for contributor in contributors:
        print(f"- {contributor['name']} ({contributor['email']})")

    print(f"\nLicense: {license}")

if __name__ == "__main__":
    main()