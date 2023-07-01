export function newListener<TEvent extends Event>(target: EventTarget, type: string, callback: EventListenerOrEventListenerObject, options?: AddEventListenerOptions | boolean) {
  const stop = () => {
    target.removeEventListener(type, callback, options)
  }

  const start = () => {
    target.addEventListener(type, callback, options)
  }


  return {start, stop}
}

export function newTimer(callback: Function, timeout?: number, once = true) {
  let timer = -1

  const stop = () => {
    if (timer === -1) {
      return
    }
    once ? clearTimeout(timer) : clearInterval(timer)
    timer = -1
  }

  const start = () => {
    stop()
    timer = once ? setTimeout(callback, timeout) : setInterval(callback, timeout)
    return timer
  }

  return {start, stop}
}

export const newFrame = (callback: FrameRequestCallback) => {
  let frame = -1

  const stop = () => {
    if (frame === -1) {
      return
    }
    cancelAnimationFrame(frame)
  }

  const start = () => {
    stop()
    frame = requestAnimationFrame(callback)
    return frame
  }

  return {start, stop}
}

export const useListener = <TEvent extends Event>(target: EventTarget, type: string, callback: (evt: TEvent) => void, options?: AddEventListenerOptions | boolean): () => void => {
  target.addEventListener(type, callback as EventListenerOrEventListenerObject, options)
  return function stopEvent() {
    target.removeEventListener(type, callback as EventListenerOrEventListenerObject, options)
  }
}

// eslint-disable-next-line @typescript-eslint/ban-types
export const useTimer = (callback: Function, timeout?: number, once = true): () => void => {
  const timer = once ? setTimeout(callback, timeout) : setInterval(callback, timeout)
  return function stopTimer() {
    // eslint-disable-next-line no-unused-expressions
    once ? clearTimeout(timer) : clearInterval(timer)
  }
}

export const useFrame = (callback: FrameRequestCallback): () => void => {
  const frame = requestAnimationFrame(callback)
  return function stopFrame() {
    cancelAnimationFrame(frame)
  }
}
