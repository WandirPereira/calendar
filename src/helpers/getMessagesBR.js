export const getMessagesBR = () => {
  return {
    allDay: "Todo dia",
    previous: "<",
    next: ">",
    today: "Hoje",
    month: "Mês",
    week: "Semana",
    day: "Dia",
    agenda: "Agenda",
    date: "Data",
    time: "Hora",
    event: "Evento",
    noEventsInRange: "No existem eventos neste intervalo",
    showMore: (total) => `+ Ver mais (${total})`,
  };
};
