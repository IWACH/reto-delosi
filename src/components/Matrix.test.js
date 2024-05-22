import { render, screen } from "@testing-library/react";
import Matrix from "./Matrix";

describe("Matrix Component", () => {
  test("renders Matrix component correctly", () => {
    const matrixData = [
      [1, 2],
      [3, 4],
    ];
    render(<Matrix matrix={matrixData} title="Test Matrix" />);

    // Verifica que el título esté presente
    const titleElement = screen.getByText(/Test Matrix/i);
    expect(titleElement).toBeTruthy(); // Verifica que el título está presente y no es falsy

    // Verifica que los valores de la matriz estén presentes y sean correctos
    const cell1 = screen.getByText("1");
    expect(cell1).toBeTruthy(); // Verifica que el valor '1' está presente y no es falsy

    const cell2 = screen.getByText("2");
    expect(cell2).toBeTruthy(); // Verifica que el valor '2' está presente y no es falsy

    const cell3 = screen.getByText("3");
    expect(cell3).toBeTruthy(); // Verifica que el valor '3' está presente y no es falsy

    const cell4 = screen.getByText("4");
    expect(cell4).toBeTruthy(); // Verifica que el valor '4' está presente y no es falsy
  });
});
