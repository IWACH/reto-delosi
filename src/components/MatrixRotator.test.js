import { render, screen, fireEvent } from "@testing-library/react";
import MatrixRotator from "./MatrixRotator";

describe("MatrixRotator Component", () => {
  test("renders MatrixRotator component correctly", () => {
    render(<MatrixRotator />);

    // Verifica que el título esté presente
    const titleElement = screen.getByText(
      /Rotar Matriz 90 Grados en sentido Antihorario/i
    );
    expect(titleElement).toBeTruthy(); // Verifica que el título está presente y no es falsy

    // Verifica que el textarea y el botón estén presentes
    const textareaElement = screen.getByPlaceholderText(
      /Ingresa la matriz como un array JSON/i
    );
    expect(textareaElement).toBeTruthy(); // Verifica que el textarea está presente y no es falsy

    const buttonElement = screen.getByRole("button", { name: /Rotar Matriz/i });
    expect(buttonElement).toBeTruthy(); // Verifica que el botón está presente y no es falsy
  });

  test("rotates matrix correctly on button click", () => {
    render(<MatrixRotator />);

    // Simula la entrada de datos en el textarea
    const textareaElement = screen.getByPlaceholderText(
      /Ingresa la matriz como un array JSON/i
    );
    fireEvent.change(textareaElement, {
      target: { value: "[[1, 2, 3], [4, 5, 6], [7, 8, 9]]" },
    });

    // Simula hacer clic en el botón de rotar matriz
    const buttonElement = screen.getByRole("button", { name: /Rotar Matriz/i });
    fireEvent.click(buttonElement);

    // Verifica que la matriz original y la rotada estén presentes
    const originalMatrixTitle = screen.getByText(/Matriz Original/i);
    expect(originalMatrixTitle).toBeTruthy();

    const rotatedMatrixTitle = screen.getByText(/Matriz Rotada/i);
    expect(rotatedMatrixTitle).toBeTruthy();
  });
});
