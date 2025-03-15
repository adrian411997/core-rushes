import React from "react";

import { render, screen } from "@testing-library/react";
import { waitFor } from "@testing-library/react";
import { Portrait } from "../../../../../src/components/login/portrait/Portrait"; // Asegúrate de ajustar la ruta al archivo del componente

jest.useFakeTimers();

describe("Portrait Component", () => {
  it("should render the images correctly", () => {
    render(<Portrait />);
    const images = screen.getAllByAltText("portrait");
    expect(images).toHaveLength(3); // Verifica que las tres imágenes estén presentes
  });

  it("should update the currentIndex every 3 seconds", async () => {
    render(<Portrait />);

    // Avanza en el tiempo y espera que los cambios se reflejen
    jest.advanceTimersByTime(3000);

    await waitFor(() => {
      const slideTrack = screen.getByTestId("slide-track"); // Requiere agregar data-testid
      expect(slideTrack).toHaveStyle(`transform: translateX(-100%)`); // Ajusta según tu lógica
    });

    jest.advanceTimersByTime(3000);

    await waitFor(() => {
      const slideTrack = screen.getByTestId("slide-track");
      expect(slideTrack).toHaveStyle(`transform: translateX(-200%)`);
    });
  });
});
