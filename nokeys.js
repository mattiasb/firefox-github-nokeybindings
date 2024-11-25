// Copyright 2024, Mattias Bengtsson <mattias.jc.bengtsson@gmail.com>
// SPDX-License-Identifier: Apache-2.0

for (ev of ["keydown", "keyup", "keypress"]) {
    window.addEventListener(ev, (e) => { e.stopPropagation(); }, true);
    window.addEventListener(ev, (e) => { e.stopPropagation(); }, true);
    window.addEventListener(ev, (e) => { e.stopPropagation(); }, true);
}
