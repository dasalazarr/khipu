import { addKeyword, EVENTS } from "@builderbot/bot";
import { menuFlow } from "./menuFlow";

const mainFlow = addKeyword([
  EVENTS.WELCOME,
  EVENTS.VOICE_NOTE,
  EVENTS.MEDIA,
  EVENTS.DOCUMENT,
]).addAction(async (ctx, ctxFn) => {
  if (ctx.body.includes("_event_")) {
    return ctxFn.endFlow(
      "Aun no tengo la capacidad de procesar documentos, multimedia o notas de voz."
    );
  }
  await ctxFn.flowDynamic("Bienvenido a este Chabot! Para comenzar, necesito registrate!");
  return ctxFn.gotoFlow(menuFlow);

});

export { mainFlow };
