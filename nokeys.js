// Copyright 2024, Mattias Bengtsson <mattias.jc.bengtsson@gmail.com>
// SPDX-License-Identifier: Apache-2.0

allowed = []

window.addEventListener('keydown', (e) => {
    if (!allowed.includes(e.key))
        e.stopPropagation();
}, true);
